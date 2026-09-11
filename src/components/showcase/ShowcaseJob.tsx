import { useLang } from '../../context/LanguageContext'
import type { JobItem } from '../../data/types'
import { MediaGallery, type ZoomRequest } from '../shared/MediaGallery'
import { CollapsibleShowcaseBlock } from '../shared/CollapsibleShowcaseBlock'
import { ShowcaseJobHeader } from '../shared/ShowcaseJobHeader'

export function ShowcaseJob({
  job,
  onZoom,
}: {
  job: JobItem
  onZoom: (req: ZoomRequest) => void
}) {
  const { t } = useLang()
  return (
    <article className="showcase-job" data-company={job.company}>
      <ShowcaseJobHeader
        heading={job.company}
        subtitle={job.title}
        location={job.location}
        period={job.period}
      />
      {job.evidence?.map((block, bi) => (
        <CollapsibleShowcaseBlock
          key={bi}
          title={block.title ? t(block.title) : t({ es: 'Evidencia', en: 'Evidence' })}
        >
          <hr />
          {block.content?.map((content, ci) => (
            <div key={ci}>
              <p className="showcase-desc">{t(content.description)}</p>
              <MediaGallery
                items={content.items}
                defaultAlt="Evidence"
                onZoom={onZoom}
                layout={content.layout}
              />
            </div>
          ))}
        </CollapsibleShowcaseBlock>
      ))}
    </article>
  )
}
