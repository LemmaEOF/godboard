function big_board_extrude_1_outline_fn(){
    return new CSG.Path2D([[73.3013931,-183.9039887],[53.9205435,-132.4928693]]).appendArc([53.8601305,-131.2697405],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.2432683,-107.4475457]).appendArc([62.3681207,-105.9745179],{"radius":2,"clockwise":true,"large":false}).appendPoint([96.8432647,-109.3169792]).appendArc([97.1679021,-109.3757934],{"radius":2,"clockwise":true,"large":false}).appendPoint([123.8940559,-116.5370448]).appendArc([124.2046075,-116.648429],{"radius":2,"clockwise":true,"large":false}).appendPoint([140.2695131,-123.9568737]).appendArc([141.0977027,-124.1364061],{"radius":2,"clockwise":false,"large":false}).appendPoint([162.1965571,-124.1364061]).appendArc([163.0247467,-123.9568736],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.0896524,-116.6484289]).appendArc([179.4002039,-116.5370448],{"radius":2,"clockwise":true,"large":false}).appendPoint([206.1263577,-109.3757934]).appendArc([206.4509951,-109.3169792],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.9261392,-105.9745179]).appendArc([243.0509914,-107.4475458],{"radius":2,"clockwise":true,"large":false}).appendPoint([249.4341293,-131.2697404]).appendArc([249.3737163,-132.4928693],{"radius":2,"clockwise":true,"large":false}).appendPoint([229.9928667,-183.9039887]).appendArc([228.639066,-185.1303496],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.0658041,-201.3609062]).appendArc([167.5481661,-201.4290545],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.7460937,-201.4290545]).appendArc([135.2284557,-201.3609062],{"radius":2,"clockwise":true,"large":false}).appendPoint([74.6551937,-185.1303496]).appendArc([73.3013931,-183.9039887],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return big_bottom_case_fn();
            }

        