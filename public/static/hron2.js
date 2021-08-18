getScript(HR_WEB_ROOT + 'js/easyXDM/easyXDM.min.js', function () {
    hrsky = new HRSkyen({
        companyId: 344,
        persistent: {
            theme: "GOWORKApS",
            joblisturl: location.href
        },
        locale: "da_DK",
        container: "hrskyen",
        queryKey: "hr"
    });
});