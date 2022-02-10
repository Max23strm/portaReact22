import React from 'react'
import {createContext, useContext, useState} from 'react'

const DataContext= createContext();

export const DataConsumer= () =>useContext(DataContext)


function DataProvider({children}) {

    
}

export default DataProvider