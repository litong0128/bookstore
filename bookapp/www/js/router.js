angular.module('starter.router', [])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'LocalBookCtrl'
      }
    }
  })
  .state('tab.dash-pdf', {
    url: '/dash/pdf/:url',
    views: {
      'tab-dash': {
        templateUrl: 'lib/pdfjs/web/viewer.html',
        
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.mine', {
    url: '/mine',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine.html',
        
      }
    }
  })
    .state('tab.mine-user', {
    url: '/mine/user',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine-user.html',
        
      }
    }
   })
    .state('tab.mine-messages', {
    url: '/mine/messages',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine-messages.html',
        
      }
    }
   })
    .state('tab.mine-setting', {
    url: '/mine/setting',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine-setting.html',
        
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
});