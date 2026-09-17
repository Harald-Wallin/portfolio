export default function PresentationVideo() {
  return (
    <section className="presentation">
      <div className="video-placeholder">
        <button
          className="video-play-button"
          type="button"
          aria-label="Spela min presentation"
        >
          <span className="video-play-icon" aria-hidden="true">
            ▶
          </span>
        </button>

        <p>Min presentation</p>
      </div>
    </section>
  );
}