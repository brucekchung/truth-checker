/* eslint-disable */
import { 
  destructureUrl, 
  bbbRating, 
  watsonToneAnalysis, 
  googleAuthor
} from './api';
import { key } from './apiKey';
//create and import mock data

describe('api calls', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve('mockData')
      }));
  });

  it('should exist', () => {

  });  

  it.skip('should call the data with the correct params', () => {
    const url=`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`;

    apiMovieData(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });
})

//   it('the api movieData returns data object once promise resolves', async () => {
//     const actual = await apiMovieData('www.imdb.com');
//     expect(actual).toEqual(cleanMovieArray);
//   });

//   it('should catch errors', async () => {
//     window.fetch = jest.fn().mockImplementation(() =>
//       Promise.reject({
//         status: 404,
//         json: () => Promise.reject("Error")
//       }));
//     const error = await apiMovieData();

//     expect(error).toEqual("Error");
//   });

//   describe('POST api fetches', () => {

//     it('the getAllUsers makes a fetch call', async () => {
//       window.fetch = jest.fn().mockImplementation(() => {
//         return new Promise((resolve, reject) => {
//           resolve({
//             response: {results: []}
//           });
//         });
//       });

//       getAllUsers();

//       expect(window.fetch).toHaveBeenCalled();
//     });

//     it('the validateUsers call should POST an object of one user with name and email to login', async () => {
//       window.fetch = jest.fn().mockImplementation(() => {
//         return new Promise((resolve, reject) => {
//           resolve({
//             status: 200,
//             json: () => Promise.resolve(userData),
//           });
//         });
//       });

//       const expected = userData;
//       const email = 'bros@gmail.com';
//       const password = 'pass';

//       await expect(validateUser(email, password)).resolves.toBe(expected);
//     })

//     it.skip('the signUpUser call should fail if not passed a user', async () => {
//       const failureResponse = {status: 404};

//       window.fetch = jest.fn().mockImplementation(() => {
//         return new Promise((resolve, reject) => {
//           reject({
//             status: 404,
//             json: () => Promise.resolve(failureResponse),
//           });
//         });
//       });

//       const notAUser = {};
//       const error = await signUpUser(notAUser);

//       expect(error).toEqual(failureResponse)
//       // await expect(signUpUser(notAUser)).resolves.toBe(failureResponse);
//     })
//   })
// })