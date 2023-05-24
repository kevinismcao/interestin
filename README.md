<p align="center">
  <img width="200" height="200" src="https://github.com/kevinismcao/interestin/blob/main/frontend/src/assets/image/logo3.png">
</p>

## Background 

[interestIn](https://interest-in.herokuapp.com/) is a [Pinterest](https://www.pinterest.com/) clone. InterestIn is a website that designed to enable saving and discovery of infomation on the internet using images in the form of pinboards. It is a place for people  to share and collect thoughts, ideas and moments of life.

[Try it now!](https://interest-in.herokuapp.com/)

## Overview

With interestIn, users will be able to:
- Login with existing account and sign up with new account.
- Use the demo user to create pins and attach photo with it to share publicly.
- Use the demo user to create boards and pin images(pins) to the board and collect pins for later user
- User can edit and delete the pins they created.
- User can edit and delete the boards they created and remove the board-to-pin association.
- User can make comments on the Pin show page also edit or delete their comments.
- Search pins through params.

## Technologies

* Javascript
* React.js
* Redux
* Ruby
* Ruby on Rails
* PostgreSQL
* Webpack
* AWS S3
* Heroku

## Previews

### Splashpage
![Splashpage](https://github.com/kevinismcao/interestin/blob/main/frontend/src/assets/image/previewgif/splashpage.gif)

### Login and Signup
![Loginandsignup](https://github.com/kevinismcao/interestin/blob/main/frontend/src/assets/image/previewgif/loginsignup.gif)

### Create Pin
![createpin](https://github.com/kevinismcao/interestin/blob/main/frontend/src/assets/image/previewgif/createpin.gif)

### Pin to Board
![Pintoboard](https://github.com/kevinismcao/interestin/blob/main/frontend/src/assets/image/previewgif/pintoboard.gif)

### Pin Showpage and Comments
![Pinshowandcomments](https://github.com/kevinismcao/interestin/blob/main/frontend/src/assets/image/previewgif/pinshowandcomments.gif)

## Code snippets

### Home Page Pins Index
Below is a code snippet of the home page index component. With the use of react hooks like `useDispatch`, `useSelector`, `useState` and `useMemo`, it can grab different slices of state to display the home page pins, current user's boards and loading screen before fetch data complete.

```js
const HomePage = () => {
    const dispatch = useDispatch()
    const pins = useSelector(getPins) 
    const boards = useSelector(getBoards)
    const sessionUser = useSelector(state => state.session.user)
    const homePins = pins.slice(0,50)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        dispatch(fetchPins())
            .finally(()=>(setLoading(false)))
    },[dispatch])

    useEffect(()=>{
        dispatch(fetchBoards(sessionUser.id));
    }, [dispatch, sessionUser])

    const userBoards = useMemo(() => boards.filter((board) => board.owner.id === sessionUser.id), [boards, sessionUser])
    
    const content = () => {
        return(
            <div className="homepage-container">
                <PinsIndex pins={homePins} userBoards = {userBoards}/>
            </div>
        )        
    }

    return loading ? <Loading/> : content()
}
```