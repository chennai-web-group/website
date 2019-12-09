import React from 'react';
import VideoIcon from '../assets/icons/video.svg';
import MonitorIcon from '../assets/icons/monitor.svg';
import CodeIcon from '../assets/icons/code.svg';
import IconLink from './IconLink';
import TextLink from './TextLink';

export default function Talk(props) {
  let { talk } = props;
  let { title, video, speaker_profile: speakerProfile, speaker } = talk || {};

  return (
    <div className="border rounded-sm m-2 sm:border-0 sm:m-0">
      <div className="flex p-3 px-4">
        <div className="sm:w-2/5 w-full">
          <TextLink link={video} text={title} />
        </div>

        <div className="w-1/5 hidden sm:flex">
          {/* eslint-disable-next-line camelcase */}
          <TextLink link={speakerProfile} text={speaker} />
        </div>

        <div className="w-2/5 flex-row-reverse hidden sm:flex">
          <MetaIcons talk={talk} />
        </div>
      </div>

      {/* For mobile devices */}
      <div className="p-3 px-4 flex sm:hidden text-sm text-gray-600">
        <div className="w-2/5">
          {/* eslint-disable-next-line camelcase */}
          By <TextLink link={speakerProfile} text={speaker} />
        </div>

        <div className="w-3/5 flex-row-reverse flex">
          <MetaIcons talk={talk} />
        </div>
      </div>
    </div>
  );
}

const MetaIcons = ({ talk }) => {
  let { video, slides, code } = talk || {};
  return (
    <>
      <IconLink link={video} icon={VideoIcon} />
      <IconLink link={slides} icon={MonitorIcon} />
      <IconLink link={code} icon={CodeIcon} />
    </>
  );
};
