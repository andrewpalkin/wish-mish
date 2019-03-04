import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import AccountMainComponent from "./AccountMainComponent";
import {accountOperations} from "../apis/account-manage-duck-spi";


const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    const accountRelatedWishes = state.firestore ? state.firestore.ordered.accountRelatedWishes : [];
    const accountRelatedOffers = state.firestore ? state.firestore.ordered.accountRelatedOffers : [];
    return {
        userId,
        accountRelatedWishes,
        accountRelatedOffers
    };
};

const mapDispatchToProps = dispatch => {

    const cancelWishAccountMainComponent = (wishId) => {
        dispatch(accountOperations.cancelWishAccountMainComponent(wishId));
    };

    return { cancelWishAccountMainComponent};
};

const AccountContainer = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect(props => {
        return [
            {
                collection: "wishes",
                where: ["userId", "==", props.userId],
                orderBy: [["publishedDate", "desc"]],
                storeAs: "accountRelatedWishes"
            },
            {
                collection: "offers",
                where: ["userId", "==", props.userId],
                orderBy: [["createdDate", "desc"]],
                storeAs: "accountRelatedOffers"
            }
        ];
    })
)(AccountMainComponent);

export default AccountContainer;