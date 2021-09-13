import React from 'react'
import {homeWorkReducer, sortNameUp} from '../homeWorkReducer'
import {PeopleType} from "../../HW8";

let initialState: Array<PeopleType> // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const endState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(endState[0].name).toBe('Александр')
    expect(endState[5].name).toBe('Кот')
    expect(endState.length).toBe(6)

    console.log(endState)
    // expect(...).toBe(...)


})
test('sort name down', () => {
    const endState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(endState[0].name).toBe('Кот')
    expect(endState[5].name).toBe('Александр')
    expect(endState.length).toBe(6)

})
test('check age 18', () => {
    const endState = homeWorkReducer(initialState, {type: 'check', payload: 18})

expect(endState.length).toBe(4)
})
