
export function buildIndex(object) {

  if (object.id) {
    return { [object.id]: object }
  } else if (object.children) {
    return object.children
      .map(obj => buildIndex(obj))
      .reduce((acc, curr) => Object.assign(acc, curr), {})
  } else {
    throw new Error(
      `buildIndex: Object must have either 'id' or 'children' property. `
    );
  }
}

