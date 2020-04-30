import React, {Component} from 'react';
import matcha1 from './images/matcha1.jpg';
import matcha2 from './images/matcha2.jpg';
import coffee1 from './images/coffee1.jpg';
import coffee2 from './images/coffee2.jpg';
import './css/Baking.css';
import {SRLWrapper} from "simple-react-lightbox";

export class Baking extends Component{
  render(){
    return (
      <SRLWrapper>
        <div className="Baking">

            <div className="Matcha">

                <div className="Matcha1">
                    <img className="Matcha1Img" src={matcha1}></img>
                    <img className="Matcha2Img" src={matcha2}></img>
                </div>

                <div className="MatchaText">

                    <p>
                        This is a cake I made for my friend's birthday. It was my first time baking a full size cake like this! My goal was to
                        incorporate flavors she would like in a cake format that I personally enjoyed; that is, a lighter cake with filling and frosting
                        that stays away from the iced, powdered sugar cakes that are prevalent. <br></br><br></br>The cake portion is purely matcha flavored. While the dark
                        coloration of the crumb resembles that of a chocolate cake, it is in fact purely matcha that has taken on a darker color due to the baking
                        process! In between each of the three cake layers is a layer of matcha mousse. Finding a way to sandwich that mousse in between the layers
                        proved to be an interesting challenge. I had to devise a makeshift "mold" to pour the unset mousse into out of parchment paper that I wrapped
                        around the cake. <br></br><br></br> Finally, the cake is frosted with a layer of plain whipped cream. I had contemplated flavoring the whipped cream or even
                        simply covering the cake in another mousse layer, but I decided on the whipped cream in order to create a more visually appealing color contrast, a concept
                        I developed further by adding blueberries to and dusting matcha powder to the top of the cake.
                    </p>

                </div>

            </div>

            <div className="Coffee">

                <div className="CoffeeImgs">
                    <img className="Coffee1Img" src={coffee1}></img>
                    <img className="Coffee2Img" src={coffee2}></img>
                </div>

                <div className="CoffeeText">

                    <p>
                        I recently made this cake for Easter! It is a "coffee crunch" cake, inspired by the many cake variations of the
                        same name offered in bakeries around the Bay Area. These cakes are defined by a coffee-flavored cake base, topped with
                        "coffee crunch" candy that is also dispersed between the layers. The coffee crunch candy is simply a variation of the foam
                        toffee candy that goes by names such as "seafoam" or "honeycomb".<br></br><br></br>
                        The recipes I found online for coffee crunch cakes used a chiffon cake base for the cake layers, which I wasn't particularly
                        fond of. Rather, I elected to use the same base cake recipe that I used for my matcha cake, with the obvious substitution of coffee
                        flavor for matcha. I accomplished this by adding a bit of strong brewed coffee to the cake batter, a step which mirrored my matcha cake
                        recipe's addition of brewed green tea. I also added a bit of cocoa powder in the hopes that this would make the resulting coffee flavor a bit
                        richer and deeper. The frosting of the cake is a simple italian buttercream, flavored with some more brewed coffee. <br></br><br></br>
                        I was overall pleased with the result, however in the future I would like even more coffee flavor. I tasted the cake batter before I baked it and
                        it was wonderfully dark and rich with coffee flavor; however, after baking, it seems some of this flavor was lost or perhaps blended with the chocolate
                        flavoring also present, a reverse outcome from my experience with the matcha cake in which the toasting seemed to enhance the flavor of the matcha. In the future,
                        I will probably lessen the amount of cocoa powder added, and greatly increase the strength of the coffee I use in the cake batter in order to achieve that rich coffee
                        flavor in the finished cake.
                    </p>

                </div>


            </div>

        </div>
        </SRLWrapper>
    );
  }
}
export default Baking;