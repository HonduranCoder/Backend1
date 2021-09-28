const { app } = require('../server.js'); 
const supertest = require('supertest');
const request = supertest(app); 

describe('get routes', ()=>{
    if('the halloween-characters endpoint returns all halloween-characters', async()=>{
        const myData = [
        {
            id:1, 
            name: 'Michael Myers', 
            movie: 'Halloween', 
            image: 'https://m.media-amazon.com/images/I/41cnyG7PO5L._AC_SS450_.jpg'
        }, 
        {
            id:2,
            name:'Chuckie', 
            movie: "Child's Play", 
            image: 'https://alternativemovieposters.com/wp-content/uploads/2019/06/pullin_childsplay.jpg'
        }, 
        {
            id:3,
            name: 'Pennywise', 
            movie: 'IT', 
            image:'https://m.media-amazon.com/images/I/71b9C02hskL._AC_SY679_.jpg'
        }, 
        {
            id:4, 
            name:'Hannibal Lecter', 
            movie: 'The Silence of the Lambs', 
            image:'https://m.media-amazon.com/images/I/81SVDO6WcrL._AC_SY679_.jpg'
        }
        ]; 
        const response = await request.get('/halloween-characters'); 
        expect(response.body).toEqual(myData);
    }); 
    it('the halloween-characters endpoint returns all halloween-characters', async()=> {
        const myData ={
            id:1, 
            name:'Michael Myers', 
            movie: 'Halloween',
            image: 'https://m.media-amazon.com/images/I/41cnyG7PO5L._AC_SS450_.jpg'
        }; 
        const response = await request.get('/halloween-characters/1'); 
        expect(response.body).toEqual(myData)
    });
});