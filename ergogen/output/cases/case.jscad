function big_board_extrude_1_outline_fn(){
    return new CSG.Path2D([[73.3013931,-183.9039887],[53.9205435,-132.4928693]]).appendArc([53.8601305,-131.2697405],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.2432683,-107.4475457]).appendArc([62.3681207,-105.9745179],{"radius":2,"clockwise":true,"large":false}).appendPoint([96.8432647,-109.3169792]).appendArc([97.1679021,-109.3757934],{"radius":2,"clockwise":true,"large":false}).appendPoint([123.8940559,-116.5370448]).appendArc([124.2046075,-116.648429],{"radius":2,"clockwise":true,"large":false}).appendPoint([140.2695131,-123.9568737]).appendArc([141.0977027,-124.1364061],{"radius":2,"clockwise":false,"large":false}).appendPoint([162.1965571,-124.1364061]).appendArc([163.0247467,-123.9568736],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.0896524,-116.6484289]).appendArc([179.4002039,-116.5370448],{"radius":2,"clockwise":true,"large":false}).appendPoint([206.1263577,-109.3757934]).appendArc([206.4509951,-109.3169792],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.9261392,-105.9745179]).appendArc([243.0509914,-107.4475458],{"radius":2,"clockwise":true,"large":false}).appendPoint([249.4341293,-131.2697404]).appendArc([249.3737163,-132.4928693],{"radius":2,"clockwise":true,"large":false}).appendPoint([229.9928667,-183.9039887]).appendArc([228.639066,-185.1303496],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.0658041,-201.3609062]).appendArc([167.5481661,-201.4290545],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.7460937,-201.4290545]).appendArc([135.2284557,-201.3609062],{"radius":2,"clockwise":true,"large":false}).appendPoint([74.6551937,-185.1303496]).appendArc([73.3013931,-183.9039887],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[135,-153],"radius":2.5})
.union(
    CAG.circle({"center":[169,-153],"radius":2.5})
).union(
    CAG.circle({"center":[152,-191.25],"radius":2.5})
).union(
    CAG.circle({"center":[236.9835055,-138.8952261],"radius":2.5})
).union(
    CAG.circle({"center":[66.3107543,-138.8952261],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[135,-153],"radius":1.5})
.union(
    CAG.circle({"center":[169,-153],"radius":1.5})
).union(
    CAG.circle({"center":[152,-191.25],"radius":1.5})
).union(
    CAG.circle({"center":[236.9835055,-138.8952261],"radius":1.5})
).union(
    CAG.circle({"center":[66.3107543,-138.8952261],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function big_board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[73.3013931,-183.9039887],[53.9205435,-132.4928693]]).appendArc([53.8601305,-131.2697405],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.2432683,-107.4475457]).appendArc([62.3681207,-105.9745179],{"radius":2,"clockwise":true,"large":false}).appendPoint([96.8432647,-109.3169792]).appendArc([97.1679021,-109.3757934],{"radius":2,"clockwise":true,"large":false}).appendPoint([123.8940559,-116.5370448]).appendArc([124.2046075,-116.648429],{"radius":2,"clockwise":true,"large":false}).appendPoint([140.2695131,-123.9568737]).appendArc([141.0977027,-124.1364061],{"radius":2,"clockwise":false,"large":false}).appendPoint([162.1965571,-124.1364061]).appendArc([163.0247467,-123.9568736],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.0896524,-116.6484289]).appendArc([179.4002039,-116.5370448],{"radius":2,"clockwise":true,"large":false}).appendPoint([206.1263577,-109.3757934]).appendArc([206.4509951,-109.3169792],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.9261392,-105.9745179]).appendArc([243.0509914,-107.4475458],{"radius":2,"clockwise":true,"large":false}).appendPoint([249.4341293,-131.2697404]).appendArc([249.3737163,-132.4928693],{"radius":2,"clockwise":true,"large":false}).appendPoint([229.9928667,-183.9039887]).appendArc([228.639066,-185.1303496],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.0658041,-201.3609062]).appendArc([167.5481661,-201.4290545],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.7460937,-201.4290545]).appendArc([135.2284557,-201.3609062],{"radius":2,"clockwise":true,"large":false}).appendPoint([74.6551937,-185.1303496]).appendArc([73.3013931,-183.9039887],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[75.7508829,-182.4897752],[56.3700333,-131.0786558]]).appendArc([56.3096203,-129.855527],{"radius":2,"clockwise":true,"large":false}).appendPoint([61.6574819,-109.8970355]).appendArc([63.7823343,-108.4240077],{"radius":2,"clockwise":true,"large":false}).appendPoint([98.2574783,-111.766469]).appendArc([98.5821157,-111.8252832],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.4445661,-117.9512583]).appendArc([121.7551177,-118.0626425],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.8200233,-125.3710872]).appendArc([138.6482129,-125.5506196],{"radius":2,"clockwise":false,"large":false}).appendPoint([164.6460469,-125.5506196]).appendArc([165.4742365,-125.3710871],{"radius":2,"clockwise":false,"large":false}).appendPoint([181.5391422,-118.0626424]).appendArc([181.8496937,-117.9512583],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.7121441,-111.8252832]).appendArc([205.0367815,-111.766469],{"radius":2,"clockwise":true,"large":false}).appendPoint([239.5119256,-108.4240077]).appendArc([241.6367778,-109.8970356],{"radius":2,"clockwise":true,"large":false}).appendPoint([246.9846395,-129.8555269]).appendArc([246.9242265,-131.0786558],{"radius":2,"clockwise":true,"large":false}).appendPoint([227.5433769,-182.4897752]).appendArc([226.1895762,-183.7161361],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.4800178,-198.9114164]).appendArc([168.9623797,-198.9795647],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.3318801,-198.9795647]).appendArc([133.8142421,-198.9114164],{"radius":2,"clockwise":true,"large":false}).appendPoint([77.1046835,-183.7161361]).appendArc([75.7508829,-182.4897752],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function big_bottom_case_fn() {
                    

                // creating part 0 of case big_bottom
                let big_bottom__part_0 = big_board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let big_bottom__part_0_bounds = big_bottom__part_0.getBounds();
                let big_bottom__part_0_x = big_bottom__part_0_bounds[0].x + (big_bottom__part_0_bounds[1].x - big_bottom__part_0_bounds[0].x) / 2
                let big_bottom__part_0_y = big_bottom__part_0_bounds[0].y + (big_bottom__part_0_bounds[1].y - big_bottom__part_0_bounds[0].y) / 2
                big_bottom__part_0 = translate([-big_bottom__part_0_x, -big_bottom__part_0_y, 0], big_bottom__part_0);
                big_bottom__part_0 = rotate([0,0,0], big_bottom__part_0);
                big_bottom__part_0 = translate([big_bottom__part_0_x, big_bottom__part_0_y, 0], big_bottom__part_0);

                big_bottom__part_0 = translate([0,0,0], big_bottom__part_0);
                let result = big_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,1], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outer_wall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _inner_wall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outer_wall_case_fn() {
                    

                // creating part 0 of case _outer_wall
                let _outer_wall__part_0 = big_board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outer_wall__part_0_bounds = _outer_wall__part_0.getBounds();
                let _outer_wall__part_0_x = _outer_wall__part_0_bounds[0].x + (_outer_wall__part_0_bounds[1].x - _outer_wall__part_0_bounds[0].x) / 2
                let _outer_wall__part_0_y = _outer_wall__part_0_bounds[0].y + (_outer_wall__part_0_bounds[1].y - _outer_wall__part_0_bounds[0].y) / 2
                _outer_wall__part_0 = translate([-_outer_wall__part_0_x, -_outer_wall__part_0_y, 0], _outer_wall__part_0);
                _outer_wall__part_0 = rotate([0,0,0], _outer_wall__part_0);
                _outer_wall__part_0 = translate([_outer_wall__part_0_x, _outer_wall__part_0_y, 0], _outer_wall__part_0);

                _outer_wall__part_0 = translate([0,0,0], _outer_wall__part_0);
                let result = _outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _inner_wall_case_fn() {
                    

                // creating part 0 of case _inner_wall
                let _inner_wall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _inner_wall__part_0_bounds = _inner_wall__part_0.getBounds();
                let _inner_wall__part_0_x = _inner_wall__part_0_bounds[0].x + (_inner_wall__part_0_bounds[1].x - _inner_wall__part_0_bounds[0].x) / 2
                let _inner_wall__part_0_y = _inner_wall__part_0_bounds[0].y + (_inner_wall__part_0_bounds[1].y - _inner_wall__part_0_bounds[0].y) / 2
                _inner_wall__part_0 = translate([-_inner_wall__part_0_x, -_inner_wall__part_0_y, 0], _inner_wall__part_0);
                _inner_wall__part_0 = rotate([0,0,0], _inner_wall__part_0);
                _inner_wall__part_0 = translate([_inner_wall__part_0_x, _inner_wall__part_0_y, 0], _inner_wall__part_0);

                _inner_wall__part_0 = translate([0,0,0], _inner_wall__part_0);
                let result = _inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = big_bottom_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.subtract(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        