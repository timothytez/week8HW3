import {v4 as uuidv4} from 'uuid'

type InventoryItem = {
    id: string
    name: string
    description: string
    value: number
}

    type Armor = InventoryItem &{
        defense: number;
    };
  
    type Weapon = InventoryItem &{
        damage: number;
    };

    const armor: Armor = {
        id: '555222',
        name: 'armor',
        description: 'steel',
        value: 0,
        defense: 0
      };
      
      const weapon: Weapon = {
        id: '888444',
        name: 'sword',
        description: 'sharp',
        value: 0,
        damage: 0,
      };
      
      console.log(armor);
      console.log(weapon);

      type RPGCharacter = {
        id: string;
        name: string;
        archetype: string;
        fightingStyle: 'ranged' | 'melee';
        inventory: InventoryItem[];
      };
      
      function createCharacter(name: string, archetype: string, fightingStyle: 'ranged' | 'melee', inventory: InventoryItem[]): RPGCharacter {

        return{
          id: uuidv4(),
          name,
          archetype,
          fightingStyle,
          inventory,
        };
      }

      function createInventoryItem(name:string, description:string, value:number): InventoryItem{
        return{
            id: uuidv4(),
            name,
            description,
            value,
        }
    }
    



        // const character: RPGCharacter = {
        // const characterId = uuidv4(); // Generate a UUID for the character's ID
      
        
        // const inventory: InventoryItem[] = []; // Initialize an empty inventory for the character