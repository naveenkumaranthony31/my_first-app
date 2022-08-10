import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  const data = [{
    title: "Free",
    currency: "$",
    price: 0,
    features: [
      {
        title: "Single User",
        isEnable: true,
        
      },
      {
        title: "5GB Storage",
        isEnable: true,
        },
     {
        title: "Unlimited Public Projects",
        isEnable: true
      },
      {
        title: "Community Access",
        isEnable: true
      },
      {
        title: "Unlimited Private Projects",
        isEnable: false
      },
      {
        title: "Dedicated Phone Support",
        isEnable: false
      },
      {
        title: "Free Subdomain",
        isEnable: false
      },
      {
        title: "Monthly Status Reports",
        isEnable: false
      },
    ]
    },{
      title: "Plus",
      currency: "$",
      price: 9,
      features: [
        {
          title: "5 Users",
          isEnable: true
        },
        {
          title: "50GB Storage",
          isEnable: true
        },
       {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true
        },
        {
          title: "Free Subdomain",
          isEnable: true
        },
        {
          title: "Monthly Status Reports",
          isEnable: false
        },
      ]
      },
      {
        title: "Pro",
        currency: "$",
        price: 49,
        features: [
          {
            title: "Unlimited Users",
            isEnable: true
          },
          {
            title: "150GB Storage",
            isEnable: true
          },
         {
            title: "Unlimited Public Projects",
            isEnable: true
          },
          {
            title: "Community Access",
            isEnable: true
          },
          {
            title: "Unlimited Private Projects",
            isEnable: true
          },
          {
            title: "Dedicated Phone Support",
            isEnable: true
          },
          {
            title: "Free Subdomain",
            isEnable: true
          },
          {
            title: "Monthly Status Reports",
            isEnable: true
          },
        ]
        },
    
]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
         {
          data.map((card)=>{
            return(<MyCard data={card}></MyCard>)

          })
         }

        </div>
      </div>
    </section>
  );
}

export default App;
