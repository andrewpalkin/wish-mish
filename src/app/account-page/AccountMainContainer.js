import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import AccountMainComponent from "./AccountMainComponent";
import {accountOperations} from "../apis/account-manage-duck-spi";


const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.id;

    return {
        userId
    };
};

const mapDispatchToProps = dispatch => {

    const cancelWishAccountMainComponent = () => {
        dispatch(accountOperations.cancelWishAccountMainComponent());
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
                orderBy: [["createdDate", "desc"]],
                store: "accountRelatedWishes"
            },
            {
                collection: "offers",
                where: ["userId", "==", props.userId],
                orderBy: [["createdDate", "desc"]],
                store: "accountRelatedOffers"
            }
        ];
    })
)(AccountMainComponent);

export default AccountContainer;