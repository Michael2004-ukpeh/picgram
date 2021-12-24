import {createContext, useState, useEffect} from 'react'
import reducer from "./reducer"

const initialState = {
  imgSrc : []
}


const ImgContext = createContext(initialState)
