if(Meteor.isClient) {
  
  Template.portfolio.helpers({
    projects: function() {
      return [
        {
          title: 'Postachio',
          image: '/postachio.png',
          description: 'The Evernote powered blogging platform.',
          className: 'postachio' 
        },
        {
          title: 'Mastodon',
          image: '/mastodon.png',
          description: 'A fun and easy messaging app.',
          className: 'mastodon'           
        },
        {
          title: 'Postachio',
          image: '/postachio.png',
          description: 'A fun and easy messaging app.',
          className: 'postachio'           
        },
        {
          title: 'QuoteRobot',
          image: '/quoterobot.png',
          description: 'A fun and easy messaging app.',
          className: 'quoterobot'
        }
      ];
    }
  });
  
  Template.portfolio.onCreated(function(){
    var portfolio = $('.portfolio');
    var items = portfolio.find('li');
    items.hide();
    $(items[0]).show();
  });
  
}