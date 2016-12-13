if(Meteor.isClient) {

  Template.site.helpers({
    word: function() {
      return Session.get('word');
    }
  });

  Template.site.events({
    'click [data-show-portfolio]': function(e, t) {
      var portfolio = $('.portfolio');
      portfolio.addClass('on');
    },
    'click [data-hide-portfolio]': function(e, t) {
      var portfolio = $('.portfolio');
      console.log('portfolio: ', portfolio);
      portfolio.removeClass('on');
    }
  });

  Template.site.onCreated(function(){
    Session.set('word', 'apps');
  });

  Template.site.onRendered(function(){
    console.log('Rendered...')
    var randomColors = ['purple', 'pink', 'lightPurple', 'blue', 'jade', 'green', 'yellow', 'orange', 'red'];
    var setBgColor = function() {
      var color = randomColors[parseInt(Math.floor(Math.random() * randomColors.length))];
      $('.rainbow').attr('class', color + " rainbow");
    };

		setBgColor();
		this.rainbow = Meteor.setInterval(setBgColor, 4000);
  });

	Template.site.onDestroyed(function(){
		Meteor.clearInterval(this.rainbow);
	});

}
