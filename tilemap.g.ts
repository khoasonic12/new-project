// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000020b0b0b0b0b0b100b0b0b0b0b0b0b05071201010101010101010101010112060701011201011212121201121212120607010112010101011212011201120106070101120101011212010112011201060a121212010101010101011201120109070101120101080d01121212011201061101010101010e0f010101010112011407010112010101010101010101010106070101120112011212121201011201060701011201120101011201010112010607010112010101010112010101120106070101120101010112010101120101060701010101011212010101120101010607120101010112010112121201011206040c0c0c0c0c0c0c130c0c0c0c0c0c03`, img`
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 . . 2 . . 2 2 2 2 . 2 2 2 2 2 
2 . . 2 . . . . 2 2 . 2 . 2 . 2 
2 . . 2 . . . 2 2 . . 2 . 2 . 2 
2 2 2 2 . . . . . . . 2 . 2 . 2 
2 . . 2 . . 2 2 . 2 2 2 . 2 . 2 
. . . . . . 2 2 . . . . . 2 . . 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . 2 . 2 2 2 2 . . 2 . 2 
2 . . 2 . 2 . . . 2 . . . 2 . 2 
2 . . 2 . . . . . 2 . . . 2 . 2 
2 . . 2 . . . . 2 . . . 2 . . 2 
2 . . . . . 2 2 . . . 2 . . . 2 
2 2 . . . . 2 . . 2 2 2 . . 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenWest,sprites.skillmap.islandTile4,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenEast], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`10001000020303030404040404040404040404050a0b0101010101010101010101010b060a01010b01010b0b0b010b0b0b0101060a01010b01010b010b0101010b0101060a01010b010101010b0101010b0101060a01010b01010b010b0101010b0101060c01010b01010b010b01010b0b0101060a01010101010b010b0b0b010101010d0a010101010b0b0b0b010101010101060a010101010101010b0b0b0b0b0101060a01010101010101010101010b0101060a0101010b0101010101010b0b0101060a010101010b0b01010b0b0b010101060a01010101010b0b0b010101010b01060a010b0101010101010101010101010609080808080808080808080808080807`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 . . 2 . . 2 2 2 . 2 2 2 . . 2 
2 . . 2 . . 2 . 2 . . . 2 . . 2 
2 2 . 2 . . . . 2 . . . 2 . . 2 
2 . . 2 . . 2 . 2 . . . 2 . . 2 
. . . 2 . . 2 . 2 . . 2 2 . . 2 
2 . . . . . 2 . 2 2 2 . . . . . 
2 . . . . 2 2 2 2 . . . . . . 2 
2 . . . . . . . 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . 2 . . . . . . 2 2 . 2 2 
2 2 . . . 2 2 . . 2 2 2 . . . 2 
2 . . . . . 2 2 2 . . . . 2 . 2 
2 . 2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDarkDiamond,sprites.dungeon.collectibleInsignia,sprites.dungeon.doorClosedEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
