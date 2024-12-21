import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api:any;
  districts = [
    {
      id: 1,
      name: "Andhra Pradesh",
      image: "https://th.bing.com/th/id/OIP.cRFMxCmYfxaLGxlpgOSlAAHaE8?rs=1&pid=ImgDetMain",
      description: "Known for its Tirupati temple and the bustling city of Visakhapatnam."
    },
    {
      id: 2,
      name: "Arunachal Pradesh",
      image: "https://cdn.britannica.com/82/144382-050-981C1E3E/harbour-Visakhapatnam-Andhra-Pradesh-India.jpg",
      description: "A beautiful state in the Northeast, famous for Tawang Monastery."
    },
    {
      id: 3,
      name: "Assam",
      image:  "https://www.andbeyond.com/wp-content/uploads/sites/5/assam-tea-plantations.jpg",

      description: "Famous for its tea plantations and the Kaziranga National Park."
    },
    {
      id: 4,
      name: "Bihar",
      "image": "https://media.istockphoto.com/id/530927704/photo/mahabodhi-temple-bodhgaya.jpg?s=612x612&w=0&k=20&c=MeuSoIquuLhsQB5JNv3zDn8G6IPuNRlbcIW9EZd4o3o=",

      description: "Home to ancient Nalanda University and the Mahabodhi Temple."
    },
    {
      id: 5,
      name: "Chhattisgarh",
      image:  "https://s7ap1.scene7.com/is/image/incredibleindia/1-kutaghat-dam-bilaspur-chhattisgarh-khutaghat-attr-hero?qlt=82&ts=1727011181193",

      description: "Known for its tribal culture and the Chitrakote Waterfalls."
    },
    {
      id: 6,
      name: "Goa",
      "image": "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=",

      description: "Popular for its beaches, nightlife, and Portuguese heritage."
    },
    {
      id: 7,
      name: "Gujarat",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/dwarika-dhish-main-temple-dwarka-gujarat-1-attr-hero?qlt=82&ts=1726734672385",
      description: "Famous for the Gir National Park and the historic Dwarka city."
    },
   
    
   
    
    
    {
      id: 18,
      name: "Nagaland",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYIBHqFdhdJZbwyKEW1cQXztC2HkUN2uwfQ&s",

      description: "Known for its rich tribal culture and the Hornbill Festival."
    },
    
    {
      id: 21,
      name: "Rajasthan",
      image: "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU=",

      description: "Home to grand palaces, forts, and the Thar Desert."
    },
    {
      id: 22,
      name: "Sikkim",
      image: "https://s3.india.com/wp-content/uploads/2024/10/Sikkim_-The-Hidden-Gem-Of-Northeast-India-You-Need-To-Visit-Now.jpg",

      description: "Known for its pristine beauty and the majestic Kanchenjunga."
    },
    {
      id: 23,
      name: "Tamil Nadu",
      image: "https://www.tourmyindia.com/states/tamilnadu/image/tamilnadu-banner.webp",

      description: "Famous for its Dravidian temples and classical arts."
    },
    {
      id: 24,
      name: "Telangana",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar-hyderabad-telangana-state-hero?qlt=82&ts=1726653487606",

      description: "Known for the Charminar and the historic Golconda Fort."
    },
    {
      id: 25,
      name: "Tripura",
      image: "https://media.istockphoto.com/id/1292258648/photo/agartala-in-tripura-india.jpg?s=612x612&w=0&k=20&c=iJAeCeIhgE44719znNGp535AQPfk0_YoDymAWCX5-Yk=",
      description: "Famous for the Neermahal palace and its rich tribal culture."
    },
    
    {
      id: 27,
      name: "Uttarakhand",
      image: "https://static.toiimg.com/photo/52360554.cms",
      description: "Known for its pilgrimage sites like Kedarnath and Badrinath."
    },
    {
      id: 28,
      name: "West Bengal",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-howrah-bridge-kolkata-west-bengal-city-hero?qlt=82&ts=1726642884073",
      description: "Famous for Kolkata, the Sundarbans, and Durga Puja festivities."
    }
  ]

  constructor() { }
  getDistricts(){
    return this.districts;
  }
  getDistrictById(id:any){
    return this.districts.find(district => district.id==id)
  }
}
