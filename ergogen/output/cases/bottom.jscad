function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[75.7508829,-182.4897752],[56.3700333,-131.0786558]]).appendArc([56.3096203,-129.855527],{"radius":2,"clockwise":true,"large":false}).appendPoint([61.6574819,-109.8970355]).appendArc([63.7823343,-108.4240077],{"radius":2,"clockwise":true,"large":false}).appendPoint([98.2574783,-111.766469]).appendArc([98.5821157,-111.8252832],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.4445661,-117.9512583]).appendArc([121.7551177,-118.0626425],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.8200233,-125.3710872]).appendArc([138.6482129,-125.5506196],{"radius":2,"clockwise":false,"large":false}).appendPoint([164.6460469,-125.5506196]).appendArc([165.4742365,-125.3710871],{"radius":2,"clockwise":false,"large":false}).appendPoint([181.5391422,-118.0626424]).appendArc([181.8496937,-117.9512583],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.7121441,-111.8252832]).appendArc([205.0367815,-111.766469],{"radius":2,"clockwise":true,"large":false}).appendPoint([239.5119256,-108.4240077]).appendArc([241.6367778,-109.8970356],{"radius":2,"clockwise":true,"large":false}).appendPoint([246.9846395,-129.8555269]).appendArc([246.9242265,-131.0786558],{"radius":2,"clockwise":true,"large":false}).appendPoint([227.5433769,-182.4897752]).appendArc([226.1895762,-183.7161361],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.4800178,-198.9114164]).appendArc([168.9623797,-198.9795647],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.3318801,-198.9795647]).appendArc([133.8142421,-198.9114164],{"radius":2,"clockwise":true,"large":false}).appendPoint([77.1046835,-183.7161361]).appendArc([75.7508829,-182.4897752],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        