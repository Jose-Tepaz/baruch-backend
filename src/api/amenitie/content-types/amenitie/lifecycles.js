// src/api/amenitie/content-types/amenitie/lifecycles.js

console.log('✅ Lifecycles de amenities cargados correctamente!');

export default {
    async beforeCreate(event) {
      const { data } = event.params;
      
      // El identifier no está localizado, así que está en la raíz de data
      // El Name está localizado, así que puede estar en el campo específico del locale
      const identifier = data.identifier;
      const name = data.Name; // Este ya viene en el locale correcto
      
      console.log('=== beforeCreate DEBUG ===');
      console.log('Data:', data);
      console.log('Identifier:', identifier);
      console.log('Name:', name);
      
      if (identifier && name) {
        data.display_name = `[${identifier}] ${name}`;
        console.log('Setting display_name:', data.display_name);
      }
    },
  
    async beforeUpdate(event) {
      const { data, where } = event.params;
      
      console.log('=== beforeUpdate DEBUG ===');
      console.log('Data:', data);
      console.log('Where:', where);
      
      // Si vienen ambos campos en el update
      if (data.identifier && data.Name) {
        data.display_name = `[${data.identifier}] ${data.Name}`;
        console.log('Setting display_name (both present):', data.display_name);
        return;
      }
      
      // Si solo viene uno, necesitamos buscar el otro
      if ((data.identifier || data.Name) && where?.id) {
        const current = await strapi.entityService.findOne(
          'api::amenitie.amenitie',
          where.id,
          { 
            locale: data.locale || 'en'
          }
        );
        
        console.log('Current amenity:', current);
        
        const identifier = data.identifier ?? current?.identifier;
        const name = data.Name ?? current?.Name;
        
        if (identifier && name) {
          data.display_name = `[${identifier}] ${name}`;
          console.log('Setting display_name (from existing):', data.display_name);
        }
      }
    }
  };