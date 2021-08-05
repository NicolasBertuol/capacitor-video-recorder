import { PluginListenerHandle } from '@capacitor/core';

export interface VideoRecorderPlugin {
	initialize(options?: VideoRecorderOptions): Promise<void>;
	destroy(): Promise<void>;
	flipCamera(): Promise<void>;
	addPreviewFrameConfig(config: VideoRecorderPreviewFrame): Promise<void>;
	editPreviewFrameConfig(config: VideoRecorderPreviewFrame): Promise<void>;
	switchToPreviewFrame(options: { id: string }): Promise<void>;
	showPreviewFrame(): Promise<void>;
	hidePreviewFrame(): Promise<void>;
	startRecording(): Promise<void>;
	stopRecording(): Promise<{ videoUrl: string }>;
	getDuration(): Promise<{ value: number }>;
	addListener(eventName: 'onVolumeInput', listenerFunc: (event: {value: number}) => void): PluginListenerHandle;
}

export interface VideoRecorderPreviewFrame {
	id: string;
	stackPosition?: 'front' | 'back';
	x?: number;
	y?: number;
	width?: number | 'fill';
	height?: number | 'fill';
	borderRadius?: number;
	dropShadow?: {
		opacity?: number;
		radius?: number;
		color?: string;
	}
}

export const VideoRecorderErrors = {
    CAMERA_RESTRICTED: 'Camera access restricted',
    CAMERA_DENIED: 'Camera access denied',
    MICROPHONE_RESTRICTED: 'Microphone access restricted',
    MICROPHONE_DENIED: 'Microphone access denied'
}

export interface VideoRecorderOptions {
	camera?: VideoRecorderCamera;
	quality?: VideoRecorderQuality;
	autoShow?: boolean;
	previewFrames?: VideoRecorderPreviewFrame[];
}

export enum VideoRecorderCamera {
	FRONT,
	BACK
}

export enum VideoRecorderQuality {
	MAX_480P,
	MAX_720P,
	MAX_1080P,
	MAX_2160P,
	HIGHEST,
	LOWEST,
	QVGA
}
