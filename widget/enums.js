'use strict';

(function (angular) {
    angular.module('youtubePluginWidget')
        .constant('TAG_NAMES', {
            YOUTUBE_INFO: 'YouTubeInfo'
        })
        .constant('STATUS_CODE', {
            INSERTED: 'inserted',
            UPDATED: 'updated',
            NOT_FOUND: 'NOTFOUND',
            UNDEFINED_DATA: 'UNDEFINED_DATA',
            UNDEFINED_OPTIONS: 'UNDEFINED_OPTIONS',
            UNDEFINED_ID: 'UNDEFINED_ID',
            ITEM_ARRAY_FOUND: 'ITEM_ARRAY_FOUND',
            NOT_ITEM_ARRAY: 'NOT_ITEM_ARRAY',
            UNDEFINED_EVENT: 'UNDEFINED_EVENT'
        })
        .constant('STATUS_MESSAGES', {
            UNDEFINED_DATA: 'Undefined data provided',
            UNDEFINED_OPTIONS: 'Undefined options provided',
            UNDEFINED_ID: 'Undefined id provided',
            NOT_ITEM_ARRAY: 'Array of Items not provided',
            ITEM_ARRAY_FOUND: 'Array of Items provided',
            UNDEFINED_EVENT: 'Undefined event received'
        })
        .constant('CONTENT_TYPE', {
            CHANNEL_FEED: 'Channel Feed',
            SINGLE_VIDEO: 'Single Video'
        })

})(window.angular);