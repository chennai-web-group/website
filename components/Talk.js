import React from 'react';
import VideoIcon from '../assets/icons/video.svg';
import MonitorIcon from '../assets/icons/monitor.svg';
import CodeIcon from '../assets/icons/code.svg';
import IconLink from './IconLink';
import TextLink from './TextLink';

export default function Talk(props) {
  let { talk } = props;
  let { title, video, speaker_profile, speaker, slides, code } = talk || {}; // eslint-disable-line camelcase

  return (
    <div className="flex p-3 px-4">
      <div className="w-2/5">
        <TextLink link={video} text={title} />
      </div>

      <div className="w-1/5">
        {/* eslint-disable-next-line camelcase */}
        <TextLink link={speaker_profile} text={speaker} />
      </div>

      <div className="w-2/5 flex flex-row-reverse">
        <IconLink link={video} icon={VideoIcon} />
        <IconLink link={slides} icon={MonitorIcon} />
        <IconLink link={code} icon={CodeIcon} />
      </div>
    </div>
  );
}
