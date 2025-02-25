function big_board_extrude_1_outline_fn(){
    return new CSG.Path2D([[72.3860942,-187.5077717],[58.1842364,-115.9271928]]).appendArc([58.2141459,-115.020334],{"radius":2,"clockwise":true,"large":false}).appendPoint([64.6431921,-91.0268067]).appendArc([66.7680445,-89.5537788],{"radius":2,"clockwise":true,"large":false}).appendPoint([101.2431885,-92.8962402]).appendArc([101.5678259,-92.9550544],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.2939797,-100.1163058]).appendArc([128.6045313,-100.22769],{"radius":2,"clockwise":true,"large":false}).appendPoint([144.6694368,-107.5361346]).appendArc([145.4976264,-107.715667],{"radius":2,"clockwise":false,"large":false}).appendPoint([166.5964808,-107.715667]).appendArc([167.4246704,-107.5361345],{"radius":2,"clockwise":false,"large":false}).appendPoint([183.489576,-100.2276899]).appendArc([183.8001275,-100.1163058],{"radius":2,"clockwise":true,"large":false}).appendPoint([210.5262813,-92.9550544]).appendArc([210.8509187,-92.8962402],{"radius":2,"clockwise":true,"large":false}).appendPoint([245.3260628,-89.5537788]).appendArc([247.450915,-91.0268067],{"radius":2,"clockwise":true,"large":false}).appendPoint([253.8799613,-115.0203339]).appendArc([253.9098708,-115.9271928],{"radius":2,"clockwise":true,"large":false}).appendPoint([239.708013,-187.5077717]).appendArc([238.2638897,-189.0504026],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.9009277,-205.2246095]).appendArc([177.3832897,-205.2927578],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.7108175,-205.2927578]).appendArc([134.1931795,-205.2246095],{"radius":2,"clockwise":true,"large":false}).appendPoint([73.8302174,-189.0504026]).appendArc([72.3860943,-187.5077717],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        