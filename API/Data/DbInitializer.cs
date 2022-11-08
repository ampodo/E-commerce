using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;


namespace API.Data
{
    public static class DbInitializer
    {

      public static async Task Initialize(StoreContext context, UserManager<User> userManager)
      {

          if (!userManager.Users.Any())
          {
        
            var user = new User
            {
                 UserName = "qwerty",
                 Email = "qwerty@test.com"

            };

            
            await userManager.CreateAsync(user, "Pas$$w0rdzeut");
            await userManager.AddToRoleAsync(user, "Member");


            
            var admin = new User
            {
                 UserName = "admin",
                 Email = "admin@test.com"

            };


            await userManager.CreateAsync(admin, "Pas$$w0rdzeut");
            await userManager.AddToRolesAsync(admin, new[] {"Member", "Admin"});

             
          }


         if (context.Products.Any()) return;

         var products = new List<Product>
         {
                new Product
                {
                    Name = "Cream",
                    Description = "Exfoliating cream that eliminates pigmentary spots and protects epidermis from pollution and stress.",
                    Price = 89,
                    PictureUrl = "/images/products/nightderm.png",
                    Brand = "DERM ACTE",
                    Type = "Exfoliating",
                    QuantityInStock = "Limited"
                },
                
                new Product
                {
                    Name = "Fluid",
                    Description = "This facial fluid protects skin from sun exposure and pollution.",
                    Price = 43,
                    PictureUrl = "/images/products/derm2.png",
                    Brand = "DERM ACTE",
                    Type = "Moisturizer",
                    QuantityInStock = "Limited"
                },
                
                   
                new Product
                {
                    Name = "Lotion",
                    Description = "Alcohol-free lotion that consists of spruce oil and carrot extract. Compatible with all skin types.",
                    Price = 26,
                    PictureUrl = "/images/products/aroma1.png",
                    Brand = "Aromatherapie",
                    Type = "Tonifying",
                    QuantityInStock = "Limited"
                },

                new Product
                {
                    Name = "Gel",
                    Description = "Facial gel wash contains lavender essential oil and lemon extract.",
                    Price = 28,
                    PictureUrl = "/images/products/aroma2.png",
                    Brand = "Aromatherapie",
                    Type = "Liquid",
                    QuantityInStock = "Limited"
                },

                new Product
                {
                    Name = "Mask",
                    Description = "Treatment for all skin types with Blackcurrant Bud extract that hydrates the skin.",
                    Price = 30,
                    PictureUrl = "/images/products/aroma3.png",
                    Brand = "Aromatherapie",
                    Type = "Face care",
                    QuantityInStock = "Limited"
                },

                new Product
                {
                    Name = "Fluid",
                    Description = "Hydrating treatment comprises soft fluid in order to moisturize the most dehydrated epidermis.",
                    Price = 56,
                    PictureUrl = "/images/products/hydra1.png",
                    Brand = "Hydraderm",
                    Type = "Treatment",
                    QuantityInStock = "Limited"
                },

                new Product
                {
                    Name = "Serum",
                    Description = "Booster for all skin types. This is a fluid serum with moisturizing ingredients. Composed of acid pearls, more than 90% of natural ingredients.",
                    Price = 60,
                    PictureUrl = "/images/products/rezanaja.png",
                    Brand = "Hydraderm",
                    Type = "Treatment",
                    QuantityInStock = "Limited"
                },
                   
                new Product
                {
                    Name = "Gel",
                    Description = "This lubricating gel can be used as a cleanser. Reduces the painful feeling of tightness.",
                    Price = 31,
                    PictureUrl = "/images/products/men1.png",
                    Brand = "Academie men",
                    Type = "Facial",
                    QuantityInStock = "Limited"
                },

                new Product
                {
                    Name = "Gel",
                    Description = "A specific gel that removes dark circles and puffiness.",
                    Price = 32,
                    PictureUrl = "/images/products/men2.png",
                    Brand = "Academie men",
                    Type = "Smoothing",
                    QuantityInStock = "Limited"
                },

               
                new Product
                {
                    Name = "Serum",
                    Description = "Revitalizing serum which is rich in extract and helps to recover the skin's biomechanical properties.",
                    Price = 75,
                    PictureUrl = "/images/products/sevemiracle1.png",
                    Brand = "Seve Miracle",
                    Type = "Treatment",
                    QuantityInStock = "Limited"
                },


                new Product
                {
                    Name = "Mask",
                    Description = "Mask with apricot extract that relieves fatigueness. Gives instant radiance and freshness.",
                    Price = 26,
                    PictureUrl = "/images/products/masqueapricot.png",
                    Brand = "Academie face",
                    Type = "Treatment",
                    QuantityInStock = "Limited"
                },

                new Product
                {
                    Name = "Serum",
                    Description = "Apricot Serum-Radiance 8 hours will definitely become an indispensable assistant in your daily care. Suitable for all types of skin (including fading). This serum has polishing effect and can be categorized as anti-fatigue elixir.",
                    Price = 42,
                    PictureUrl = "/images/products/apricot2.png",
                    Brand = "Academie face",
                    Type = "Nourishing",
                    QuantityInStock = "Limited"
                },


                new Product
                {
                    Name = "Lotion",
                    Description = "Alcohol-free normalizing toner that purifies face. Consists of aloe vera, protein and glycol.",
                    Price = 26,
                    PictureUrl = "/images/products/lotion2.png",
                    Brand = "Academie face",
                    Type = "Purification",
                    QuantityInStock = "Limited"
                },

                new Product
                {
                    Name = "Cream",
                    Description = "Cream with anti-aging properties of Iris extract. Helps to preserve skin's tonicity and youth. Consists of vegetable glycerin and wax.",
                    Price = 59,
                    PictureUrl = "/images/products/seve2.png",
                    Brand = "Seve Miracle",
                    Type = "Nourishing",
                    QuantityInStock = "Limited"
                },


                new Product
                {
                    Name = "Cream",
                    Description = "This cream smoothes wrinkles, restores facial volume, and eliminates pigmentation. Also capable of protecting the epidermis from external daily aggression such as blue light, UV, and pollution.",
                    Price = 93,
                    PictureUrl = "/images/products/anti.png",
                    Brand = "DERM ACTE",
                    Type = "Anti-Age",
                    QuantityInStock = "Limited"
                },
                    
            };

                            
                    
           
            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();

      }  
    }
}
