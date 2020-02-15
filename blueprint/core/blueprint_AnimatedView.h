/*
  ==============================================================================
    blueprint_AnimatedShadowView.h
    Created: 11 Feb 2020 18:32:20pm
  ==============================================================================
*/

#pragma once

#include "blueprint_ShadowView.h"
#include "blueprint_View.h"

namespace blueprint
{
    //==========================================================================

    /*
        The AnimatedView extends a ShadowView to provide animation capabilities to components. 
        
        ShadowView objects are each associated with a corresponding View and are responsible for 
        knowing where its View should be, but do not concern themselves with painting that View.
     */

    //==========================================================================
    class AnimatedView : public ShadowView
    {
    public:
        //======================================================================
        AnimatedView(View* _view) : ShadowView(_view) {}
        ~AnimatedView() {}

        //======================================================================
        void flushViewLayout() override
        {
            auto position = view->getPosition().toFloat();
            auto bounds = getCachedLayoutBounds().withPosition(position);

            view->setFloatBounds(bounds);

            animator.animateComponent(view, bounds.toNearestInt(), finalAlpha, durationMilliseconds, false, startSpeed, endSpeed);

            for (auto& child : children)
                child->flushViewLayout();
        }

    private:

        //======================================================================
        juce::ComponentAnimator animator;
        float finalAlpha = 1.0f;
        int durationMilliseconds = 1000;
        double startSpeed = 1.0;
        double endSpeed = 1.0;

        //======================================================================
        JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR(AnimatedView);
    };
}