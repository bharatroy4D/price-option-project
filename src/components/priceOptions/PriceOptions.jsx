import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const PriceOptions = () => {
    const gymPriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym (5 AM - 10 PM)",
            "No personal trainer included",
            "Basic workout plan (PDF)",
            "Water refill station access",
            "Free Wi-Fi",
            "Discount on gym merchandise (5%)"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Open gym (24/7 access)",
            "1 free personal training session per month",
            "Towel service",
            "Nutritional guide (PDF)",
            "Yoga & meditation classes",
            "Discount on supplements (10%)"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "features": [
            "All Standard Membership benefits",
            "Unlimited group fitness classes",
            "Sauna & steam room access",
            "Nutritional consultation",
            "5 personal training sessions per month",
            "Access to HIIT & CrossFit zones",
            "Custom workout & meal plan",
            "Body composition analysis",
            "Discount on personal training (15%)"
          ]
        },
        {
          "id": 4,
          "name": "Elite Membership",
          "price": 119.99,
          "features": [
            "All Premium Membership benefits",
            "Private locker & towel service",
            "Unlimited personal training",
            "Diet & meal planning",
            "Massage therapy (2 per month)",
            "Cryotherapy & recovery sessions",
            "Priority booking for fitness events",
            "Access to VIP lounge & smoothie bar",
            "Exclusive gym apparel & gear discounts (20%)",
            "Free guest pass (4 per month)"
          ]
        }
      ];
      
    return (
        <div>
            <h1>PriceOption connect</h1>
            {
                gymPriceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;