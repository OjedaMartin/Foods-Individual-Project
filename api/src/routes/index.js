require('dotenv').config();
const { Router, json } = require('express');
const { API_KEY } = process.env;
const { Recipe, DietType } = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios')
const router = Router();
module.exports = router;
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () =>{
    const apiURL = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100&addRecipeInformation=true`)
    const apiInfo = await apiURL.data.results.map(e => {
        return {
            id: e.id,
            name: e.title,
            image: e.image,
            dishType: e.dishTypes.map(e=> e),
            shortDesc: e.summary,
            healthScore: e.healthScore,
            stepByStep: e.analyzedInstructions.map(e=> e), 
            dietName: e.diets.map(e=> e),
        }
    });
    return apiInfo
}


const getDBInfo = async() => {
    
    return await Recipe.findAll({
        include:{
            model:DietType,
            attributes: ['dietName'],
            through: {
                attributes:[],
            },
        }
    })
}


const getAllRecepies = async () =>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBInfo();
    const totalInfo = apiInfo.concat(dbInfo);
    return totalInfo
}





router.get('/api/recipes',async (req, res)=>{
    let {name} = req.query
    let allRecipes = await getAllRecepies()
    
    if (name) {
        let recipeName = await allRecipes.filter(e=> e.name.toLowerCase().includes(name.toLowerCase()))
        recipeName.length? res.status(200).send(recipeName) : res.status(404).send('Recipe not found')
    } else { 
        res.status(200).send(allRecipes)
    }
        
})

router.get('/api/recipes/:id', async (req, res) => {
    const {id} = req.params
    const AllRecipes = await getAllRecepies()
    
    if (id){
    let AskedRecipe = await AllRecipes.filter(e=>e.id==id)
        AskedRecipe.length? res.status(200).json(AskedRecipe)
        : res.status(404).send('Recipe not found')    
        
    }});

router.delete('/api/delete/:id'), async(req,res)=>{
    const{id} = req.params
    
    await Recipe.destroy({
        where: { id: id },
    })

    res.status(200).send('Recipe destroyed successfully')

}    
    
router.get('/api/diets', async (req,res)=>{
    const diets = ['gluten free', 'dairy free','lacto ovo vegetarian','paleolithic','primal','whole 30','vegan','pescatarian','ketogenic','fodmap friendly'];
    const getDietsFromApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    const _diets = getDietsFromApi.data.results.map(e=>e.diets)
    const flatedDietsApi = _diets.flat().concat(diets)
    flatedDietsApi.forEach(e=>{
        DietType.findOrCreate({
            where: { dietName: e }
            
        })
    })
    const allDiets = await DietType.findAll();
    res.status(200).send(allDiets)
})

router.post('/api/recipes', async (req,res) =>{
    let {
        name,
        image,
        dishType,
        shortDesc,
        healthScore,
        stepByStep,
        createdInDb,
        dietType,
        } = req.body; 

    let recipeCreate = await Recipe.create({
        name,
        image,
        dishType,
        shortDesc,
        healthScore,
        stepByStep,
        
    })
    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    
    let dietTypeDB = await DietType.findAll({ where: { dietName: dietType } })

    recipeCreate.addDietType(dietTypeDB)
    res.status(200).send ('Recipe created successfully')
    });


router.put('/api/recipes/:id', async (req,res) =>{
    
    let {name,
        dishType,}      
        = req.body

    const {id} = req.params 
       
    
    await Recipe.update ({ name: name, dishType : dishType  },  
   
        { where: {id : id }}
    )   
    
    const myRecipe = await Recipe.findAll({ where : { id: id} })
    
    console.log(myRecipe);

    res.status(200).send(myRecipe)
})

    //Update queries also accept the where option, just like the read queries shown above.

// Change everyone without a last name to "Doe"
//await User.update({ lastName: "Doe" }, {
  //where: {
  //  lastName: null
 // }
//});
























//[ ] GET /recipes?name="...":
//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado

//[ ] GET /recipes/{idReceta}:
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados

//[ ] GET /types:
//Obtener todos los tipos de dieta posibles
//En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá

//[ ] POST /recipe:
//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//Crea una receta en la base de datos