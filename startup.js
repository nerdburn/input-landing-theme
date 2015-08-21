Meteor.startup(function() {
  
 if(Meteor.isClient) {
    return SEO.config({
      title: 'Input Logic',
      meta: {
        'description': 'We create beautiful web + mobile experiences for top brands and startups.'
      },
      og: {
        'image': 'http://inputlogic.ca/images/input-logo-dark.svg' 
      }
    });
  }
    
});