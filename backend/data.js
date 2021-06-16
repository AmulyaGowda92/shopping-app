import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Amulya',
            email: 'admin09@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin:true
        },

        {
            name: 'Mary',
            email: 'user09@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin:false
        }
    

    ],

    products: [
        
        {
            
            name: 'casual knee length frock',
            category: 'casuals',
            image: '/images/dress1.jpg',
            price: 700,
            brand: 'Vanheusen',
            countInStock:10,
            rating:4,
            numOfReviews: 10,
            description:'comfortable and elegant casual wear for party'
            
        },

        {
            
            name: 'casual summer wear frock',
            category: 'casuals',
            image: '/images/dress2.jpg',
            price: 900,
            brand: 'Vanheusen',
            countInStock:20,
            rating:4.5,
            numOfReviews: 12,
            description:'comfortable wear for party'
            
        },

        {
            
            name: ' knee length frock',
            category: 'casuals',
            image: '/images/dress3.jpg',
            price: 750,
            brand: 'Vanheusen',
            countInStock:12,
            rating:4.0,
            numOfReviews: 8,
            description:'elegant casual wear for party'
            
        },

        {
            
            name: 'casual wear frock',
            category: 'casuals',
            image: '/images/dress4.jpg',
            price: 1200,
            brand: 'Vanheusen',
            countInStock:8,
            rating:4.8,
            numOfReviews: 30,
            description:'comfortable and elegant casual wear for party'
            
        },

        {
            
            name: 'Trendy knee length frock',
            category: 'casuals',
            image: '/images/dress5.jpg',
            price: 890,
            brand: 'Vanheusen',
            countInStock:0,
            rating:3.9,
            numOfReviews: 5,
            description:'Trendy casual wear for party'
            
        },

        {
            
            name: 'Party wear frock',
            category: 'casuals',
            image: '/images/dress6.jpg',
            price: 650,
            brand: 'Vanheusen',
            countInStock:5,
            rating:4,
            numOfReviews: 15,
            description:' casual wear for party'
            
        },


    ]
}

export default data;