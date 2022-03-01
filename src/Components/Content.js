import React from 'react';

  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">
                   “Travel is the main thing you purchase that makes you more extravagant”. 
                We, at ‘Organization Name’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.
      We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. 
      We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</p>
             </div>   
          </div>   
        </section>   

        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Taj Mahal</h4>
                          <p class="card-text text-secondary">India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. .</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Jaisalmer</h4>
                          <p class="card-text text-secondary">Jaisalmer is sometimes called the "Golden City of India" because the yellow sandstone used throughout the architecture of both the fort and the town below, </p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Mount Everest</h4>
                          <p class="card-text text-secondary">Is Mount Everest in India?
Image result for mount everest
Mount Everest is located in the west of Tibet, on the border with Nepal..</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  


       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>

         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. 
            The world's seventh largest nation by area and the second largest in terms of population, India boasts a rich heritage that's the result of centuries of different cultures and religions leaving their mark.
            Things to do in India include the opportunity to experience an array of sacred sites and spiritual encounters, while nature lovers will enjoy its sun-washed beaches, lush national parks, and exciting wildlife sanctuaries.
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            Taj Mahal:

The Taj Mahal was built by Shah Jahan to commemorate Mumtaz Mahal, his beloved wife who died of child birth. The plans for the complex have been attributed to various architects of the period, although the chief architect was probably Ustad Ahmad Lahawri. The commencement of the building started around the year 1632. More than 20,000 workers were employed from India, Europe, Persia, and the Ottoman Empire. Construction of the Taj Mahal spanned 22 years at a cost between four and five million rupees.


            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            A one-stop shop that features details about all the Indian heritage hotels. You can get information about every category of heritage hotel at Heritage Hotels of India, whether you want an accommodation option for your honeymoon or for a vacation with the family.

The palatial residences of the erstwhile Indian Maharajas have been transformed into heritage hotels but ooze the same old elegance and luxury. By staying in any of the heritage hotels in India, you can enjoy a pampering treatment like the kings and the queens. These hotels are well-equipped with every modern-day facility coupled with flawless hospitality of the staff members.
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>

    
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Tourist Opinions</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://wikibio.in/wp-content/uploads/2017/11/Disha-Patani-e1511782496281.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Disha Patani</h4>
          <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
          <p class="font-weight-normal dark-grey-text">
          There was always someone to meet us at the destinations. 
          Tour guide Mahi was knowledgable and cared about our wellbeing. 
           </p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://www.bollywoodhungama.com/wp-content/uploads/2021/09/Bigg-Boss-15-Salman-Khan-to-receive-a-staggering-Rs.-350-crore-to-host-the-show-2.jpeg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Salman Khan</h4>
          <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
          <p class="font-weight-normal dark-grey-text">
         Fabulous Trip to India visiting top spots we'd always wanted to see.

         We have just returned from a fabulous trip to Amritsar and the Gold Triangle. </p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://www.bollywoodhungama.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-22-at-9.12.41-PM.jpeg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Hritik Roshan</h4>
          <h6 class="font-weight-bold blue-text my-3">Toursit</h6>
          <p class="font-weight-normal dark-grey-text">
          Punjab and the Toy train to Shimla are highlights. 
          There was a lot of travelling involved and all transport arrangements worked out well. </p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
  
  export default Content;