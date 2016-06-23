require('isomorphic-fetch');
require('es6-promise').polyfill();

export * from '../../../libs/athena/src/actions';

const requestDocs = () => (
  {
    type: 'REQUEST_DOCS',
  }
);

const loadDocs = (docs) => (
  {
    type: 'LOAD_DOCS',
    docs,
  }
);

export const fetchDocs = (id) => (
  dispatch => {
    dispatch(requestDocs());
    return fetch(`http://localhost:3000/api/docs?UserId=${id}`)
      .then(response => response.json())
      .then(docs => dispatch(loadDocs(docs)))
      .catch(err => console.log(err));
  }
);

const requestAnnotations = () => (
  {
    type: 'REQUEST_ANNOTATIONS',
  }
);

const loadAnnotations = (annotations) => (
  {
    type: 'LOAD_ANNOTATIONS',
    annotations,
  }
);

export const fetchAnnotations = (id) => (
  dispatch => {
    dispatch(requestAnnotations());
    return fetch(`http://localhost:3000/api/annotations?UserId=${id}`)
      .then(response => response.json())
      .then(annotations => dispatch(loadAnnotations(annotations)))
      .catch(err => console.log(err));
  }
);

// TODO
// pass a `filter` will determine which set of docs to
// load options will be following feed or personal feed
// export const loadDocs = () => {
//   return dispatch => {
//     dispatch({ type: 'LOADING', loading: true });

//     const docs = [
//       {
//         id: 0,
//         url: 'http://www.google.com',
//         title: 'Some Title',
//       },
//       {
//         id: 1,
//         url: 'http://www.yahoo.com',
//         title: 'Some Other Title',
//       },
//     ];

//     const annotations = [
//       {
//         id: 0,
//         target: 'This is some text from the article',
//         body: 'Some text here',
//         edit: false,
//         doc_id: 0,
//       },
//       {
//         id: 1,
//         target: 'This is some more text from the article',
//         body: 'Some other text here',
//         edit: false,
//         doc_id: 0,
//       },
//       {
//         id: 2,
//         target: 'This is some other text from the article',
//         body: 'Some more text here',
//         edit: false,
//         doc_id: 1,
//       },
//       {
//         id: 3,
//         target: 'This is some more other text from the article',
//         body: 'Some other more text here',
//         edit: false,
//         doc_id: 1,
//       },
//     ];
//     dispatch({ type: 'LOAD_DOC', docs });
//     dispatch({ type: 'LOAD_ANNOTATION', annotations });
//     dispatch({ type: 'LOADING', loading: false });
//   };
// };

export const deleteAnnotation = (id) => (
  {
    type: 'DELETE_ANNOTATION',
    id,
  }
);

export const editAnnotation = (id) => (
  {
    type: 'EDIT_ANNOTATION',
    id,
  }
);

export const editText = (body) => (
  {
    type: 'EDIT_TEXT',
    body,
  }
);

export const saveEdit = (id, body) => (
  {
    type: 'SAVE_EDIT',
    id,
    body,
  }
);

export const deleteBody = (id) => (
  {
    type: 'DELETE_BODY',
    id,
  }
);

export const deleteDoc = (id) => (
  {
    type: 'DELETE_DOC',
    id,
  }
);

export const switchView = () => (
  {
    type: 'SWITCH_VIEW',
  }
);
