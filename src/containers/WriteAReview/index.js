import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
// import requiresLogin from '../../components/requires-login';
import Logo from "../../components/logo";
import LogOutBar from "../../components/logout-bar";
import RatingForm from "../../components/rating-form";
import styled from "styled-components";
import "./rate.css";

const StyledLink = styled(Link)`
  color: #0073bb;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export class Rate extends React.Component {
  render() {
    return (
      <div className="ratePage">
        <header className="rate-header-box">
          <div className="rate-header">
            <Logo />
            <div className="rate-title">
              <h4>Write a Review</h4>
            </div>
            <LogOutBar />
          </div>
        </header>
        <section className="rate-section">
          <div className="rate-title">
            <h2>
              <StyledLink to={`../place/${this.props.place_id}`}>
                {this.props.place_name}
              </StyledLink>
            </h2>
          </div>
          <RatingForm />
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  place_name: state.search.placeInfo.name,
  place_id: state.search.placeInfo.place_id
});

export default withRouter(connect(mapStateToProps)(Rate));
// export default requiresLogin()(connect(Rate));
