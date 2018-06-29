import EmberObject from '@ember/object';
import { A as EmberArray, isArray } from '@ember/array';

export function objectify(root) {
  if (isArray(root)) {
    if (root.hasOwnProperty('toArray')) {
      return EmberArray(root.toArray());
    } else {
      return EmberArray(root);
    }
  } else if (typeof root === 'object') {
    return EmberObject.create(root);
  } else {
    return root;
  }
}

export function deepObjectify(root, maxDepth = 20) {
  if (maxDepth === 0) {
    throw new Error('deepObjectify: maxDepth exceeded.');
  }
  const newRoot = objectify(root);

  if (isArray(newRoot)) {
    newRoot.forEach((value, index) => {
      newRoot[index] = deepObjectify(value, maxDepth - 1);
    });
  } else if (typeof newRoot === 'object') {
    Object.keys(newRoot).forEach((key) => {
      newRoot[key] = deepObjectify(newRoot[key], maxDepth - 1);
    });
  }

  return newRoot;
}
