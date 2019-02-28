import React, { Component } from 'react';
import YouTube from 'react-youtube';

class SermonVideo extends Component {
    renderVideo(id) {
        if (!id) {
            return null;
        }

        return <YouTube className="sermon-video" videoId={id} />;
    }

    render() {
        return (
            <div className="sermon-video-container">
                <div className="sermon-video-header">全心全意愛你的家</div>
                {this.renderVideo('79Du2JiK-JU')}
                <div className="sermon-video-description">
                    <div className="sermon-video-description-title">PROVERBS 31:10-31</div>
                    <div className="sermon-video-description-verse">
                        An excellent wife, who can find? For her worth is far above jewels. The heart of her husband
                        trusts in her, And he will have no lack of gain. She does him good and not evil All the days of
                        her life. She looks for wool and flax And works with her hands in delight. She is like merchant
                        ships; She brings her food from afar. She rises also while it is still night And gives food to
                        her household And portions to her maidens. She considers a field and buys it; From her earnings
                        she plants a vineyard. She girds herself with strength And makes her arms strong. She senses
                        that her gain is good; Her lamp does not go out at night. She stretches out her hands to the
                        distaff, And her hands grasp the spindle. She extends her hand to the poor, And she stretches
                        out her hands to the needy. She is not afraid of the snow for her household, For all her
                        household are clothed with scarlet. She makes coverings for herself; Her clothing is fine linen
                        and purple. Her husband is known in the gates, When he sits among the elders of the land. She
                        makes linen garments and sells them, And supplies belts to the tradesmen. Strength and dignity
                        are her clothing, And she smiles at the future. She opens her mouth in wisdom, And the teaching
                        of kindness is on her tongue. She looks well to the ways of her household, And does not eat the
                        bread of idleness. Her children rise up and bless her; Her husband also, and he praises her,
                        saying: “Many daughters have done nobly, But you excel them all.” Charm is deceitful and beauty
                        is vain, But a woman who fears the Lord, she shall be praised. Give her the product of her
                        hands, And let her works praise her in the gates.
                    </div>
                </div>
            </div>
        );
    }
}

export default SermonVideo;
