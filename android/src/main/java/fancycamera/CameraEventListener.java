/*
 * Created By Osei Fortune on 2/16/18 8:43 PM
 * Copyright (c) 2018
 * Last modified 2/16/18 7:16 PM
 *
 */

package fancycamera;

public interface CameraEventListener {
    void onCameraOpen();
    void onCameraClose();
    void onPhotoEvent(PhotoEvent event);
    void onVideoEvent(VideoEvent event);
}
