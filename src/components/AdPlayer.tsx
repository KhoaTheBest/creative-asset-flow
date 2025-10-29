import { useRef, useState, useEffect } from 'react';
import { AdPlayer } from '@btg-pencil-ai/editor';

export const PencilAdPlayer = ({
  isStatic,
  dimWidth = 500,
  dimHeight = 500,
  borderRadius = 0,
}: {
  isStatic?: boolean;
  dimWidth?: number;
  dimHeight?: number;
  borderRadius?: number;
  isLoading?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number>(100);
  const [inputJson] = useState<any>({
    fps: 30,
    scenes: [
      {
        id: 'Ku6_nmqbklh2pVfIgn6rS',
        layers: [
          {
            id: 'hyQ2cLG-uS5GKAwDMRl7z',
            top: -191,
            left: 101.5,
            name: 'shape_2',
            type: 'shape',
            color: '#caf500',
            width: 877,
            height: 992,
            hidden: false,
            rotate: 0,
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            version: '4.0',
            animation: {
              name: 'Rise',
              delay: 0,
              state: 'enter',
              configs: [
                {
                  source: 'anime_js_keyframes',
                  keyframes: {
                    easing: 'cubicBezier(0.25, 1, 0.30, 1)',
                    opacity: [
                      { value: 0, timestamp: 0 },
                      { value: 1, timestamp: 600 },
                    ],
                    translateX: [
                      { value: 0, timestamp: 0 },
                      { value: 0, timestamp: 1000 },
                    ],
                    translateY: [
                      { value: -1080, timestamp: 0 },
                      { value: 0, timestamp: 1000 },
                    ],
                  },
                },
              ],
              duration: 1,
              direction: 'down',
            },
            layerType: 'shape',
            origWidth: 250,
            shapeType: 'rectangle',
            _colorType: 'secondary',
            origHeight: 250,
            layerNumber: 1,
            roundingPixels: null,
            horizontalAlign: 'centre',
            roundingPercentage: 10,
          },
          {
            id: 'hGLIdnXHcU6RMqbqANFBv',
            top: 140.614688,
            left: 162.5,
            name: 'headline_2',
            text: 'Jules Collective: Combining Style and Elegance',
            type: 'text',
            width: 755,
            height: 243,
            hidden: false,
            rotate: 0,
            scaleX: 1,
            scaleY: 1,
            autofit: true,
            opacity: 1,
            version: '5.0',
            fontSize: 81,
            htmlText: '',
            animation: {
              name: 'Motion Zoom',
              delay: 0.5,
              state: 'enter',
              configs: [
                {
                  source: 'anime_js_keyframes',
                  keyframes: {
                    easing: 'easeOutQuad',
                    scaleX: [
                      { delay: 0, value: 0.95, timestamp: 500 },
                      { delay: 0, value: 1, timestamp: 1500 },
                    ],
                    scaleY: [
                      { delay: 0, value: 0.95, timestamp: 500 },
                      { delay: 0, value: 1, timestamp: 1500 },
                    ],
                    opacity: [
                      { delay: 0, value: 0, timestamp: 500 },
                      { delay: 0, value: 1, timestamp: 1269.2307692307693 },
                    ],
                  },
                },
              ],
              duration: 1,
            },
            fontStyle: 'normal',
            layerType: 'headline',
            origWidth: 500,
            textColor: '#ff548a',
            fontFamily: 'Merriweather-Bold',
            fontWeight: 400,
            lineHeight: 1,
            origHeight: 0,
            charSpacing: 1,
            layerNumber: 1,
            textHorzAlign: 'center',
            textVertAlign: 'middle',
            isLexicalDirty: false,
            horizontalAlign: 'centre',
          },
          {
            id: 'hdcIahrsZPEzLcURQzj3J',
            top: 487.0475429,
            url: 'https://pencil-production-bucket.s3.amazonaws.com/brand-sector-assets/Jules_Collective/Packshots/Jules_Packshot_Hori_A.png',
            left: 243.5243389,
            name: 'horizontal_product_1',
            type: 'image',
            width: 970,
            height: 776,
            hidden: false,
            rotate: 0,
            scaleX: 0.6107405694975097,
            scaleY: 0.6107405694975097,
            autofit: false,
            opacity: 1,
            version: '4.0',
            animation: {
              name: 'Center Reveal',
              delay: 0.5,
              state: 'enter',
              configs: [
                {
                  name: 'center-reveal-vertical',
                  source: 'animate_css',
                  delayInFrames: 15,
                  durationInFrames: 30,
                },
              ],
              duration: 1,
              direction: 'up',
            },
            layerType: 'product',
            origWidth: 780,
            origHeight: 483,
            layerNumber: 1,
            orientation: 'horizontal',
            verticalAlign: 'middle',
            horizontalAlign: 'centre',
          },
        ],
        version: 'v1',
        endFrame: 89,
        startFrame: 0,
        canvasBgColor: '#ff548a',
        durationInFrames: 90,
      },
    ],
    version: 'v1',
    dimensions: { id: 5, width: 1080, height: 1080 },
    durationInFrames: 371,
    multiAudio: [
      {
        id: 'ZoqGsUno-4NKL8hGJwy1Q',
        url: 'https://pencil-production-bucket.s3.amazonaws.com/6003/2a166ec9-9afe-4470-a94d-734ace0a080e.mp3',
        origUrl:
          'https://pencil-production-bucket.s3.amazonaws.com/6003/2a166ec9-9afe-4470-a94d-734ace0a080e.mp3',
        volume: 0.5,
        modulations: [],
        audioStartFrame: 0,
        audioEndFrame: 370,
        audioStartDelay: 0,
        audioDurationInFrames: 370,
      },
    ],
  });

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    setSize(containerRef.current.clientWidth);
  }, [containerRef.current?.clientWidth]);

  if (size === 0) return null;

  return (
    <div ref={containerRef} className="w-full h-full">
      <div
        className="relative bg-gray-46 dark:bg-transparent"
        style={{
          width: dimWidth ?? size,
          height: dimHeight ?? size,
          borderRadius,
        }}
      >
        <AdPlayer
          visualData={inputJson}
          isStaticTemplate={isStatic!}
          width={dimWidth ?? size}
          height={dimHeight ?? size}
          borderRadius={borderRadius}
          showControls={true}
        />
      </div>
    </div>
  );
};
