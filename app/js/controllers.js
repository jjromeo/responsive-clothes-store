'use strict';

var shopApp = angular.module('shopApp', []);

shopApp.controller('ItemListCtrl', function($scope){

    $scope.products = [
        {'name': 'Almond Toe Court Shoes, Patent Black',
        'category': "Women's Footwear"},
        {'name': 'Suede Shoes, Blue',
        'category': "Women's Footwear"},
        {'name': 'Leather Driver Saddle Loafers, Tan',
        'category': "Men’s Footwear"},
        {'name': 'Flip Flops, Red',
        'category': "Men’s Footwear"},
        {'name': 'Flip Flops, Blue',
        'category': "Men’s Footwear"},
        {'name': 'Gold Button Cardigan, Black',
        'category': "Women's Casualwear"},
        {'name': 'Cotton Shorts, Medium Red',
        'category': "Women's Casualwear"},
        {'name': 'Fine Stripe Short Sleeve Shirt, Grey',
        'category': "Men's Casualwear"},
        {'name': 'Fine Stripe Short Sleeve Shirt, Green',
        'category': "Men's Casualwear"},
        {'name': 'Sharkskin Waistcoat,￼Charcoal',
        'category': "Men's Formalwear"},
        {'name': 'Lightweight Patch Pocket Blazer, Deer',
        'category': "Men's Formalwear"},
        {'name': 'Bird Print Dress, Black',
        'category': "Women's Formalwear"},
        {'name': 'Mid Twist Cut-Out Dress, Pink',
        'category': "Women's Formalwear"},
    ];
});
