import React, {Component} from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import { Navbar } from '@material-ui/core';
import PlacesAutocomplete from 'react-places-autocomplete';

function handleLogin() {
  console.log("Login clicked");
}

function handleBuy(){
  console.log("Buy Clicked")
}

class TestLoginForm extends React.Component {
  constructor(props) {
  super(props);
  // handle initialization activities
  }
  handleChangeEvents(event) {
  //handle change events
  }
  handleSubmitevents(event) {
  // handle submit events
  }
  handlePasswordChange(event){
  //handle password change events
  }
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };

  render() {
    return (
      <div className="body">
        <nav className="Navbar">
          <Button className="getOurApp">GET OUR APP</Button>
          <p className="title">PuStalk</p>
          <Button onClick={handleLogin} className="loginButton">Login</Button>
        </nav>
        <div className="locDiv">
          <p className="locn">current location</p>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                  />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div className="homeDesc">
          <p className="homeDescNavTitle">How PuStalk helps you</p>
          <p className="homeDesc1">
          Visit
          local
          book store
          online</p>
          <p className="homeDesc2">Save Your Time</p>
          <p className="homeDesc3">24 X 7 Service</p>
          <p className="homeDesc4">Get Your Fvourite Books At Low Cost</p>
          <button className="closeHomeDesc">X</button>
        </div>
        <div className="how">
          <h1 className="howWorks">How PuStalk Works</h1>
          <button className="customerSearch"></button>
          <button className="searchBookStore"></button>
          <button className="deliverRequirements"></button>
          <button onClick={handleBuy} className="buyBooks">FIND AND BUY YOUR BOOKS USING PUSTALK</button>
        </div>
        <div className="loginMain">
          <h1 className="loginHeading">PusTalk</h1>
          <div className="loginSub">
            <form onSubmit={this.handleSubmitevents}>
              {
              //handle error condition
              }
              <input type="text" className="logIn" data-test="email" value={this.state.email} onChange={this.handleChangeEvents} defaultValue="email"/>
              <input type="password" className="passWord" data-test="password" value={this.state.password} onChange={this. handlePasswordChange } defaultValue="password" />
              <input type="submit" className="submitBtn" value="Log In" data-test="submit" />
            </form>
            <p className="notAuser">Not a user yet? <a href="signUp">SIGN UP</a></p>
          </div>
        </div>
        <img src="books.jpg" className="bookS"></img>
        <div className="founderCeo">
            <p className="arif">MD.Arif</p>
            <p>Founder</p>
            <p>&</p>
            <p>CEO</p>
          </div>
        <div className="ceoDetails">       
          <img className="pic1" src="arif.jpg"></img>
          <img className="pic2" src="arif.jpg"></img>
        </div>
        <footer className="footer">
          <div className="companyDetails">
            <h3 className="companY">COMPANY</h3>
            <h6>_______________</h6>
            <a>Who are we?</a><br></br>
            <a>Teams</a><br></br>
            <a>Blogs</a><br></br>
            <a>Careers</a>
            <h6>_______________</h6>
          </div>
          <div className="contactDetails">
            <h3 className="contacT">CONTACT</h3>
            <h6>_______________</h6>
            <a>Mail us</a><br></br>
            <a>Help Centre</a><br></br>
            <a>FAQ</a><br></br><br></br>
            <h6>_______________</h6>
          </div>
          <div className="forYouDetails">
            <h3 className="forYou">FOR YOU</h3>
            <h6>_______________</h6>
            <a>Who are we?</a><br></br>
            <a>Teams</a><br></br>
            <a>Blogs</a><br></br>
            <a>Careers</a>
            <h6>_______________</h6>
          </div>
          <div className="socialMedia">
            <p className="stalkBooks">Stalk Your Books Any Where</p>
            <footer className="socialMediaFooter">
              <a className="FB" href="https://www.facebook.com/"><img className="fbImg" src="fb.png"></img></a>
              <a className="twitter" href="https://twitter.com/explore"><img className="twitterImg" src="twitter.png"></img></a>
              <a className="instagram" href="https://www.instagram.com/"><img className="instagramImg" src="instagram.jpg"></img></a>
              <a className="youtube" href="https://www.youtube.com/"><img className="youtubeImg" src="youtube.png"></img></a>
              <a className="linkedin" href="https://in.linkedin.com/"><img className="linkedinImg" src="linkedin.jpg"></img></a>
              <a className="blogger" href="https://www.blogger.com/about/?bpli=1"><img className="bloggerImg" src="blogger.png"></img></a>
            </footer>
          </div>
          <h3 className="rights">2020@ ALL RIGHTS RESERVED BY PuStalk</h3>
        </footer>
      </div>
    );
  }
}
export default App
