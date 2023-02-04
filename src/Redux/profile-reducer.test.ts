import profileReducer, {addPostActionCreator, deletePost, ProfilePageType} from "./profile-reducer";

let state = {
    postData: [
        {id: 1, message: 'Hi how are tou', like: 6},
        {id: 2, message: 'Hi how are tou?', like: 6},
        {id: 3, message: 'Hi how are tou!', like: 6},
    ],
    profile: null,
    status: '',
} as ProfilePageType

it('add new post', () => {
    // 1 test data
    let action = addPostActionCreator("It-incubator")

    // 2 action
    let newState = profileReducer(state, action)

    // 3 expectation

    expect(newState.postData.length).toBe(4);
    expect(newState.postData[3].message).toBe("It-incubator")
})

it('remove post', () => {
    // 1 test data
    let action = deletePost(1)

    // 2 action
    let newState = profileReducer(state, action)

    // 3 expectation

    expect(newState.postData.length).toBe(2);
    expect(newState.postData[1].message).toBe("Hi how are tou!")
})
