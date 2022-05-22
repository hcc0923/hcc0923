function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function createDom(fiber) {
  const dom = 
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  const isProperty = key => key !== "children";
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name];
    });
  
  return dom;
}

function render(element, container) {
  // TODO this next unit of work

  wipRoot = {
    dom: container,
    props: {
      children: [element]
    },
  }
  nextUnitOfWork = wipRoot; 
}

let nextUnitOfWork = null;
let wipRoot = null;

function workLoop(deadline) {
  nextUnitOfWork = performUnitOfWork(
    nextUnitOfWork
  );
}


window.requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  // TODO 1 create a new node and append it to the DOM
  
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  // if (fiber.parent) {
  //   fiber.parent.dom.appendChild(fiber.dom);
  // }
  // TODO 2 create the fibers for the element’s children

  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;
  while (index < elements.length) {
    const element = elements[index];

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null
    }

    if (index === 0) {
      fiber.child = newFiber; // first element
    } else {
      prevSibling.sibling = newFiber; // !first element
    }
  
    prevSibling = newFiber; // !first element as ths prevSibling
    index++;
  
    if (fiber.child) {
      return fiber.child;
    }
    let nextFiber = fiber;
    while (nextFiber) {
      if (nextFiber.sibling) {
        return nextFiber.sibling;
      }
      nextFiber = nextFiber.parent;
    }
  }
  
  // TODO 3 select the next unit of work
}

const Didact = {
  createElement,
  render
};
  
/** @jsx Didact.createElement */
const element = (
  <div>
    <h1>Hello World</h1>
    <h2>from Didact</h2>
  </div>
);

const container = document.getElementById("root");
Didact.render(element, container);