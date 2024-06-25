// modal
export const modalStatus = (state: any) => state.modal.isOpen;
export const modalTemplate = (state: any) => state.modal.template;
export const modalData = (state: any) => state.modal.data;
export const modalSize = (state: any) => state.modal.size;
export const modalTag = (state:any) => state.modal.tag;
export const modalContent = (state:any) => state.modal.content

// item 
export const getPokemonList = (state: any) => state.pokemon.pokemonList;
export const getCharacterItem = (state:any) => state.characterItem.characterItem
