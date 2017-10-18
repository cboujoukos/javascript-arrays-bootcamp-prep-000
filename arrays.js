var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, element) {
  [element, ... chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
