var myResume = angular.module('myResume', []);
myResume.controller('ResumeCtrl', ['$scope', '$http', function($scope, $http){
  console.log("Hello World from controller");

  var refresh = function() {
    $http.get('/edu').success(function(response) {
      console.log("I got the data I requested");
      $scope.edu = response;
      $scope.education = "";
    });
    $http.get('/skill').success(function(response) {
      console.log("I got the data I requested");
      $scope.skill = response;
      $scope.skills = "";
    });
    $http.get('/project').success(function(response) {
      console.log("I got the data I requested");
      $scope.project = response;
      $scope.projects = "";
    });

  };

  refresh();

  $scope.addEducation = function() {
    console.log($scope.education);
    $http.post('/edu', $scope.education).success(function(response) {
      console.log(response);
      refresh();
    });
  };

  $scope.addSkill = function() {
    console.log($scope.skills);
    $http.post('/skill', $scope.skills).success(function(response) {
      console.log(response);
      refresh();
    });
  };

  $scope.addProject = function() {
    console.log($scope.projects);
    $http.post('/project', $scope.projects).success(function(response) {
      console.log(response);
      refresh();
    });
  };

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/edu/' + id).success(function(response) {
      refresh();
    });
    $http.delete('/skill/' + id).success(function(response) {
      refresh();
    });
    $http.delete('/project/' + id).success(function(response) {
      refresh();
    });
  };


  $scope.edit = function(id) {
    console.log(id);
    $http.get('/edu/' + id).success(function(response) {
      $scope.education = response;
    });
    $http.get('/skill/' + id).success(function(response) {
      $scope.skills = response;
    });
    $http.get('/project/' + id).success(function(response) {
      $scope.projects = response;
    });

  };

  $scope.update = function() {
    console.log($scope.education._id);
    $http.put('/edu/' + $scope.education._id, $scope.education).success(function(response) {
      refresh();
    })
    console.log($scope.skills._id);
    $http.put('/skill/' + $scope.skills._id, $scope.skills).success(function(response) {
      refresh();
    })
    console.log($scope.projects._id);
    $http.put('/project/' + $scope.projects._id, $scope.projects).success(function(response) {
      refresh();
    })
  };

  $scope.deselect = function() {
    $scope.education= "";
  }
  $scope.deselect = function() {
    $scope.skills= "";
  }
  $scope.deselect = function() {
    $scope.projects= "";
  }

  }]);﻿
