import React, { useState } from 'react';
import Schedulers from '../Scheduler/Schedulers';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 'test1',
            tabTitle: 'Project Planning',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 'test2',
            tabTitle: 'Weekly Planning',
            title: 'Title 2',
            content: <Schedulers/>
        },
        {
            id: 'test3',
            tabTitle: 'Planning Insights',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
    ];

    const handleTabClick = (e:any) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;