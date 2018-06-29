import { objectify, deepObjectify } from 'ember-objectify';
import EmberObject from '@ember/object';
import { A as EmberArray, isArray } from '@ember/array';
import { module, test } from 'qunit';

module('Unit | objectify', function() {

  test("it turns a POJO into an Ember Object", function(assert) {
    const pojo = {};
    const result = objectify(pojo);
    assert.ok(result instanceof EmberObject);
  });

  test("it returns a new Ember Object when given an Ember Object", function(assert) {
    const emberObj = EmberObject.create();
    const result = objectify(emberObj);
    assert.notStrictEqual(result, emberObj);
    assert.ok(result instanceof EmberObject);
  });

  test("it turns an Array into an Ember Array", function(assert) {
    const array = [];
    const result = objectify(array);
    assert.ok(isArray(result));
    assert.ok(result.hasOwnProperty('@each'));
  });

  test("it returns a new Ember Array when given an Ember Array", function(assert) {
    const emberArray = EmberArray();
    const result = objectify(emberArray);
    assert.ok(isArray(result));
    assert.ok(result.hasOwnProperty('@each'));
    assert.notStrictEqual(result, emberArray);
  });

  test("it recursively objectifies POJOs", function(assert) {
    const pojo = {
      foo: {
        bar: 'baz'
      }
    };
    const result = deepObjectify(pojo);
    assert.ok(result instanceof EmberObject, 'Outer object is transformed');
    assert.ok(result.foo instanceof EmberObject, 'Inner object is transformed');
    assert.equal(result.foo.bar, 'baz', 'Inner object has expected property');
  });

  test("it recursively objectifies Arrays", function(assert) {
    const array = [
      [
        42
      ]
    ];
    const result = deepObjectify(array);
    assert.ok(isArray(result), 'Outer array is an array');
    assert.ok(result.hasOwnProperty('@each'), 'Outer array is an Ember Array');
    assert.ok(isArray(result[0]), 'Inner array is an array');
    assert.ok(result[0].hasOwnProperty('@each'), 'Inner array is an Ember Array');
    assert.equal(result[0][0], 42, 'Inner array contains expected item');
  });

  test("it throws an exception when out of depth", function(assert) {
    assert.throws(() => {
      deepObjectify([
        [
          [
            42
          ]
        ]
      ], 2);
    });
  })

});
