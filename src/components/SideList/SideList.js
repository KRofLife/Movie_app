import React, { useEffect, useContext } from 'react'
import { Store } from '../../store/index'
import { fetchRelatedData } from '../../apis/index'
import SideListItem from '../SideListItem/SideListItem'
import Style from './SideList.module.scss'

const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store)
  
  // const setRelatedVideo = async (id) => {
  //   await fetchRelatedData(id).then((res) => {
  //     setGlobalState({type: 'SET_RELATED', payload: {related: res.data.items}})
  //   })
  // }
  // useEffect(() => {
  //   setRelatedVideo(globalState.selected.id)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [globalState.selected])
  // // ↑動画を選択する度に関連動画を再取得する
  return (
    <div className={Style.sidenav}>
      {
        globalState.related ? globalState.related.map((video) => {
          return (
            // snippetがundifinedの場合returnしないように修正
            video.snippet && (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          )
          )
        }) : <span>no data</span>
      }
    </div>
  )
}

export default SideList
