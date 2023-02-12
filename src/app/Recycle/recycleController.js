const jwtMiddleware = require("../../../config/jwtMiddleware");
const userProvider = require("../../app/User/userProvider");
const userService = require("../../app/User/userService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");


/**
 * API No. 1
 * API Name : 재활용 가능 여부 조회 API (+ 0 : 불가능, 1: 가능)
 * [GET] /app/recycle
 */
exports.getRecycle = async function (req, res) {

    /**
     * Query String: trashType
     */
    const trashType = req.query.trashType;

    if (!trashType) {
        // 쓰레기 타입 정보 없음 오류
        res.send(errResponse(baseResponse.RECYCLE_TRASHTYPE_EMPTY));

    } else {
        // 쓰레기 타입 별 재활용 가능 여부 조회
        const recycleResult = await recycleProvider.getRecycleResult(trashType);
        return res.send(response(baseResponse.SUCCESS, recycleResult));
    }
};

/**
 * API No. 3
 * API Name : 특정 유저 조회 API
 * [GET] /app/users/{userId}
 */
exports.getUserById = async function (req, res) {

    /**
     * Path Variable: userId
     */
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userByUserId = await userProvider.retrieveUser(userId);
    return res.send(response(baseResponse.SUCCESS, userByUserId));
};

